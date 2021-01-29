import styles from '../../styles/DataVisuals.module.scss'
import path from 'path'
import Layout from '../../components/Layout'
import Radial from '../../components/charts/Radial'
import data from '../../utils/kpi-test.json';
import { parseOverviewData } from '../../utils/dataETL';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';


export default function DataVisuals(props) {

  let mutatedData = parseOverviewData(data.data);

  console.log(mutatedData, "data")  

  return (
  	<Layout>
      <div className={`${styles.dvcontainer} container-fluid`} style={{paddingTop: "80px"}}>
	    <Container className="h-100 pt-4">
	      <h2 style={{color: "#44FFD2", textAlign: "center"}}>Data Dashboard</h2>
	      <Row>
	        <Col md={4}>
		      <Row>
	 			<Col className={styles.panel}>
		      	  <Radial id={"overview-radial-1"} data={mutatedData.overall} title="Critical Ops Overview" />
		        </Col>		
		      </Row>
		      <Row className="mt-2">
	 			<Col className={styles.panel}>
		      	  <Radial id={"overview-radial-2"} data={60} title="Productivity vs Costs" />
		        </Col>		
		      </Row>
		    </Col>
	      </Row>
	    </Container>
      </div>
    </Layout>
  );
  
}