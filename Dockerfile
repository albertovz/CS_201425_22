FROM node:16
WORKDIR /c/Users/SMYRNA/Documents/CS/CS_201425_22


COPY package*.json ./

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]