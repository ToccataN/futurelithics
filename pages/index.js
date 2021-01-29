import styles from '../styles/Home.module.scss';

import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

import {
  Container,
  Row,
  Col,
} from 'reactstrap'


export default function Home() {
  return (
    <div>
      <Layout>
        <main className={styles.main}>
          <div className={styles.heroImage}>
            <img src='/hero-logo3.gif' alt="Future Lithics" width="1000px" />
          </div>
          <div className={styles.dataViz}>
            <Container style={{height: "100%"}}>
              <Row>
              <h2>
                <img src="/dvanalysis.svg" alt="Data Visualization and Analysis" width="100%" />
              </h2>
              </Row>
              <Row 
                className={"justify-content-center align-content-center pt-4 flex-grow-1"} 
                style={{marginTop: "40px"}}
              >
                <Col md={4} xs={8}>
                  <CustomCard
                    title={"Interface Development"}
                    text="Interactive Dashboards and analytics tools to suit your data requirements."
                    img="/nodegraphic2.svg"
                    link={'/dataVisuals'}
                    color="#44FFD2"
                    bgColor="#151415"
                    bodyColor="#272529"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div className={styles.featured}>
            <Container style={{height: "100%"}} className="py-4 justify-content-center align-content-center text-center">
              <h3 className="my-4">Coming Soon</h3>
              <div className="my-4">
                <img src="/spectrafact-promo.png" alt="spectrafact" width="255px" />
              </div>
              <h2 className="my-4">
                <a href="https://xd.adobe.com/view/0dec45e4-7c0d-492c-8704-30b6949345f9-58bf/" target="_blank">
                  <img src="/spectrafact-text.png" width="250px" alt="link to spectrafact prototype" />
                </a>
              </h2>
            </Container>
          </div>
        </main>
      </Layout>
    </div>
  )
}
