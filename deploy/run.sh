#!/bin/sh
echo "Step 2/2 : Running container..."

while read -r line
do
  export $line
done < ".variables"

docker rm -f $NAME
docker run -tid --restart=always \
--net=host \
-e NODE_ENV=$NODE_ENV \
-v /etc/timezone:/etc/timezone \
-v /etc/localtime:/etc/localtime \
--name=$CONTAINER_NAME \
$IMAGE_NAME:$IMAGE_TAG