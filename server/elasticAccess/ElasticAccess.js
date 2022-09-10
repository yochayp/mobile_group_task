import {Client} from '@elastic/elasticsearch';

export default class ElasticAccess{
    
    constructor(){
        this.es =  new Client({
            node: process.env.ELASTIC_NODE || 'http://localhost:9200',
            auth: {
                username:  process.env.ELASTIC_USERNAME || 'elastic',
                password: process.env.ELASTIC_PASSWORD  || 'changeme'
              },
        })
    }

    getIndex = async (index) => {
       const res = await  this.es.search({
            index: index
        })
        return res;
    }

    addDoc = async (index,body) => {
        this.es.index({
            index: index,
            body: body 
        })
    }
}