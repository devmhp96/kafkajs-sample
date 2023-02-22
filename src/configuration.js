const dotenv = require('dotenv');
const { Kafka, logLevel } = require('kafkajs')

const configuration = (() => {
    dotenv.config();
    const kafka = new Kafka({
        logLevel: logLevel.INFO,
        brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
      })
      
      const producer = kafka.producer();

      const consumerA = kafka.consumer({
        groupId: "consumerA"
      });

      const consumerB = kafka.consumer({
        groupId: "consumerB"
      });
      
      const consumerG = kafka.consumer({
        groupId: "consumerGeneral"
      })

      return {
        producer,
        consumerA,
        consumerB,
        consumerG,
      }
})();

module.exports = configuration;