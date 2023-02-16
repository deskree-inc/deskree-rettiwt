FROM node:18.7.0-alpine3.16 as build-stage
WORKDIR /app
COPY package*.json ./
COPY .env .env
RUN npm ci
COPY ./ .
ARG MODE=production
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /app/nginx.conf
ENV PORT=8080
ENV HOST=0.0.0.0
EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /app/nginx.conf > /etc/nginx/nginx.conf && nginx -c /etc/nginx/nginx.conf -g 'daemon off;'"
