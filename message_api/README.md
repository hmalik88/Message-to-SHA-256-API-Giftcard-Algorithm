
# Message API

A small micro-service where you turn a message into a sha256 hash and vice versa! The API has two endpoints: a POST to /messages and a GET for messages/:hash.

### Installing the API

1. Please make sure you have docker installed on your machine.

2. Please make sure port 3000 is free, if it isn't you can expose a different port. Run the following command to pull down and run the docker image: docker run -d -p 3000:3000 hbmalik88/message_api.

3. You can now hit the API endpoints through the terminal! 

4. The POST object will have a key of message with the value being your message (you can replace "foo"). The following command will post a message to the API and return you a sha256 hash: curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' http://localhost:8080/messages

5. Make sure you keep the hash, as you will need it for the GET request, the command is as follows: curl http://localhost:8080/messages/:hash. You should be replacing :hash with the actual hash from step 4.

6. In order to stop the container from running you can run docker stop <name|id> and then docker rm <name|id> to remove the container.


**Please Note:** *I haven't connected a db so there isn't a persistence of records, starting/stopping the container will erase messages you may have posted.*


### Testing

1. You can pull down the repository if you choose, run npm install and then npm test to run Mocha/Chai tests.
