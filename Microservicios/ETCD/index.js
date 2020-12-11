const {Etcd3} = require('etcd3');
const client = new Etcd3();


async function f(){
  await client.put('foo').value('hello');
  var fooVal = await client.get('foo').string();
  console.log('valor = '+fooVal);
}
