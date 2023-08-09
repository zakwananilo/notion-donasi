echo "Step 1/2 : Building image..."

while read -r line
do
  export $line
done < ".variables"

cd ..

docker rm --force $CONTAINER_NAME

docker rmi $IMAGE_NAME:$IMAGE_TAG

docker build --file deploy/Dockerfile -t $IMAGE_NAME:$IMAGE_TAG .