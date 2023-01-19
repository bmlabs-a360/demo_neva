FROM nginx:latest
COPY . /usr/share/nginx/html/demo_neva
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]