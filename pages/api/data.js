const dataETL = require('../../utils/dataETL')

export default async (req, res) => {
  const data = await dataETL.parseData();
  if(data.success){
  	res.statusCode = 200;
    res.json(data);
  } else {
  	res.statusCode = 403;
    res.json(data);
  }

}