FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/Taser .

EXPOSE 80 4200

CMD ["nginx", "-g", "daemon off;"]
