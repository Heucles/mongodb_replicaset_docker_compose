# Esse foi um execício de montar um replicaset mongodb utilizando docker compose.


### Pontos importantes:

* Há uma priorização de um container para que o mesmo sempre seja o primary quando estiver disponível (https://docs.mongodb.com/manual/tutorial/deploy-replica-set-with-keyfile-access-control/)
* Este código ainda não está pronto para produção uma vez que os arquivos de chave e user e senha precisam ser gerados dinamicamente e como pode-se observar no arquivo docker compose
    * A estratégia para a implementação utiliza-se de um cliente efêmero que realizará uma configuração forçada no cluster a partir do nó master
* É necessário definir a variável de ambiente **DATA_DIR** para poder executar o projeto
* Os arquivos dentro da pasta **${DATA_DIR}** se tratam das persistencias do nó do mongo e não devem ser versionados

#### Comandos Auxiliares:

* Para criar um cliente que tenha acesso ao cluster:

```bash 
docker run --name mongo_client -d --network mongoreplnode_default mongo:3.4.10
```

* Para acessar o container que foi criado como cliente:

```bash 
docker exec -it mongo_client bash
```
* Para acessar o cluster, já dentro do cliente: 
```bash 
mongo -u tom -p 'jerry' --host my-mongo-set/mongo-master:27017,mongo-sec-2:27017,mongo-sec-3:27017
```

### Referências: 
* https://docs.mongodb.com/manual/replication/
* https://docs.mongodb.com/manual/tutorial/adjust-replica-set-member-priority/
* https://stackoverflow.com/questions/37423659/how-to-create-user-in-mongodb-with-docker-compose
* https://medium.com/towards-data-science/how-to-deploy-a-mongodb-replica-set-using-docker-6d0b9ac00e49
* http://www.sohamkamani.com/blog/2016/06/30/docker-mongo-replica-set/