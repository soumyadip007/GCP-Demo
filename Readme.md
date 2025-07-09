# Build the image
docker build -t account-service .

# Run the container
docker run -p 3001:3001 account-service
