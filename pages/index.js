import Head from "next/head";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import Accordion from 'react-bootstrap/Accordion';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap"
          rel="stylesheet"
        />
        <title> عبدالله چلاسی - برنامه نویس و طراح سایت </title>
        <link rel="icon" href="/devs.png" />
        <meta
          name="keywords"
          content="طراحی سایت ,عبدالله چلاسی طراح و برنامه نویس وب سایت , عبدالله چلاسی برنامه نویس وب"
        />
        <meta
          name="description"
          content="طراحی انواع سایت های فروشگاهی , شخصی , خبری , رستوران , ورزشی و گردشگری با بهترین کیفیت در کمترین زمان"
        />
      </Head>

      <main className={styles.home}>
        <Navbar id={styles.navb} fixed="top" variant="dark" expand="md">
          <Container>
            <Navbar.Brand className={styles.iconn} href="#home"></Navbar.Brand>
            <Navbar.Brand id={styles.ico}>

              <img className={styles.logoaa} src="/devs.png" />

            </Navbar.Brand>
            <Navbar.Brand className="title" href="#home">
              {" "}
              <b style={{ color: "#3c2fe2" }}>برنامه نویس</b> و{" "}
              <b style={{ color: "#dce22f" }}>طراح سایت</b>{" "}
            </Navbar.Brand>{" "}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#web" className={styles.navbb}>
                  وبسایت
                </Nav.Link>
                <Nav.Link href="#mobile" className={styles.navbb}>
                  موبایل
                </Nav.Link>
                <Nav.Link href="#call" className={styles.navbb}>
                  سفارش پروژه{" "}
                </Nav.Link>
                <Nav.Link href="#dev" className={styles.navbb}>
                  درباره من
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className={styles.lin}>
          <div className={styles.im}>
            <p className={styles.texti}>
              <h5 className={styles.type}>عبدالله چلاسی</h5>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString(
                      '<span style="color: #cbdd3e ;">من طراح سایت و برنامه نویس موبایل هستم</span>'
                    )
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #f23c45  "> بهترین خدمات طراحی سایت های  شخصی , خبری , رستوران , ورزشی و گردشگری با بهترین کیفیت در کمترین زمان </span>'
                    )
                    .start();
                }}
              />
            </p>
          </div>

          <svg className={styles.pat} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path

              color="#CD5C5C"
              opacity={"0"}
              d="M0,32L80,74.7C160,117,320,203,480,218.7C640,235,800,181,960,186.7C1120,192,1280,256,1360,288L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>






        <Container className={styles.pvcc}>
          <Container className={styles.webi} id={"web"}>
            <Row>

              <Col md={8}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>دلفین گربدان</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/dolfin.png" width={"100%"} />
                            <hr />
                            <p>
                              باشگاه فوتبال دلفین گربدان یکی از پر افتخارترین و پر هوادارترین باشگاه های فوتبال در جزیره قشم است دلفین گربدان پیش از انقلاب ستاره جنوب گربدان نام داشت باشگاه هم اکنون در لیگ دسته دو قشم قرار گرفته , دلفین گربدان در سال 1324 در جزیره قشم روستای گربدان بنیان گذاری شده است
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="http://gorbedan.vercel.app/"
                            >
                              <p className={styles.amooz}>وبسایت دلفین گربدان</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>



              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>🇦🇪 تاجير السيارات في دبي 🇦🇪</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/cardubai.png" width={"100%"} />
                            <hr />
                            <p>
                              🇦🇪 مزايا لتأجير السيارات ، دبي 🇦🇪
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://mazaya-cars.vercel.app"
                            >
                              <p className={styles.amooz}>وبسایت 🇦🇪 تاجير السيارات في دبي </p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>



              <Col md={6}>




<Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
  <Accordion.Item eventKey="0">
    <Accordion.Header> قشم اسپلیت  </Accordion.Header>
    <Accordion.Body>
      <Col className={styles.img1}>
        <Row>
          <Col  >


            <img className={styles.img2} src="/qeshms.png" width={"100%"} />
            <hr />
            <p>

             </p>
            <a
              className={styles.a1}
              target="#"
              href="https://qeshmsplit.vercel.app/"
            >
              <p className={styles.amooz}>وبسایت قشم اسپلیت </p>

            </a>
          </Col>

        </Row>
      </Col>
    </Accordion.Body>

    <Accordion.Body>

    </Accordion.Body>


  </Accordion.Item>

</Accordion>
</Col>












              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header> دکوراسیون شادمان - رمکان</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/upvc.png" width={"100%"} />
                            <hr />
                            <p>
                              تولیدی درب و پنجره UPVC نوین ترک فروش و نصب PVC طراحی یا ساخت و اجرای انواع سایبان PVC
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://pvcshademan.vercel.app"
                            >
                              <p className={styles.amooz}>وبسایت دکوراسیون شادمان - رمکان</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>



              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>  خدمات PVC - رمکان</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >
                            <Row>

                              <Col sm={12}>
                                <Link href="/admin1.png" target="#">
                                  <img className={styles.img2} src="/admin1.png" width={"100%"} />

                                </Link>
                              </Col>

                              <Col>
                                <Link href="/admin2.png" target="#">
                                  <img className={styles.img2} src="/admin2.png" width={"100%"} />

                                </Link>
                              </Col>

                              <Col>
                                <Link href="/admin3.png" target="#">
                                  <img className={styles.img2} src="/admin3.png" width={"100%"} />

                                </Link>
                              </Col>

                              <Col>
                                <Link href="/admin4.png" target="#">
                                  <img className={styles.img2} src="/admin4.png" width={"100%"} />

                                </Link>
                              </Col>

                            </Row>




                            <hr />
                            <p>
                              وبسایت با قابلیت ورود ادمین
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://pvcahmad.ir"
                            >
                              <p className={styles.amooz}>وبسایت خدمات PVC - رمکان</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>




              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header> 🇦🇪 عمر الزبير المرزوقي 🇦🇪</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/o.png" width={"100%"} />
                            <hr />
                            <p>
                              اول حكم يكسر قاعدة احتكار حكام أوربا على نهائيات كاس العالم لكرة اليد
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://omarzubair.vercel.app/"
                            >
                              <p className={styles.amooz}>وبسایت 🇦🇪 عمر الزبير المرزوقي 🇦🇪</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>



              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>جواهری رز - قشم</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/tala.png" width={"100%"} />
                            <hr />
                            <p>
                              جواهری رز یکی از بهترین جواهر و طلا فروشی با بهترین اجناس ها و مناسب ترین قیمت در جزیره زیبای قشم
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://roz.vercel.app/"
                            >
                              <p className={styles.amooz}>وبسایت جواهری رز - قشم</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>




              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>دکوراسیون لنج</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/lenj.png" width={"100%"} />
                            <hr />
                            <p>
                              تزئینات و دکوراسیون داخلی لنج , لمبه کاری
                              هر گونه تزیینات داخلی لنج ،کمد بندی،جا قطبنما،اپن آشپزخانه و تمامی کارهای مربوط به داخل کابین با مناسب ترین قیمت انجام می‌شود
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://lenj.vercel.app/"
                            >
                              <p className={styles.amooz} >وبسایت دکوراسیون لنج</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>




              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>خدمات اینترنتی طالب</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/taleb.png" width={"100%"} />
                            <hr />
                            <p>
                              خدمات نمایندگی طالب با نصب اولیه وای فای به صورت رایگان و شارژ اینترنت به صورت آنلاین و فروش تجهیزات وای فای با قیمت های مختلف در سر تا سر جزیره قشم
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://taleb.vercel.app/"
                            >
                              <p className={styles.amooz} >وبسایت خدمات اینترنتی طالب</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>





              <Col md={6}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>آموزشگاه جزیره قشم</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/amoozesh.png" width={"100%"} />
                            <hr />
                            <p>
                              آموزشگاه جزیره قشم
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="/amoozesh.png"
                            >
                              <p className={styles.amooz} >وبسایت آموزشگاه جزیره - قشم</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>




              <Col md={8}>




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>خدمات پی وی سی - رمکان</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >


                            <img className={styles.img2} src="/pvc.png" width={"100%"} />
                            <hr />
                            <p>
                              طراح و اجرای نصب PVC با طرح های مختلف سر تا سر جزیره قشم
                            </p>
                            <a
                              className={styles.a1}
                              target="#"
                              href="https://pvcahmad.vercel.app"
                            >
                              <p className={styles.amooz} >وبسایت خدمات پی وی سی - رمکان</p>

                            </a>
                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>











            </Row>
          </Container>




          <Container className={styles.mob} id={"mobile"}>
            <Row>

              <Col >




                <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>موبایل</Accordion.Header>
                    <Accordion.Body>
                      <Col className={styles.img1}>
                        <Row>
                          <Col  >

                            <Col md={12} className={styles.img1}>
                              <Row>
                                <Col md={3} sm={3} >
                                  <a target="#" href="a1.webp">
                                    <img className={styles.img4} width="100%" src="/a1.webp" />
                                  </a>
                                </Col>

                                <Col md={3} sm={3} >
                                  <a target="#" href="a2.webp">
                                    <img className={styles.img4} width="100%" src="/a2.webp" />
                                  </a>
                                </Col>

                                <Col md={3} sm={3} >
                                  <a target="#" href="a3.webp">
                                    <img className={styles.img4} width="100%" src="/a3.webp" />
                                  </a>
                                </Col>

                                <Col  >
                                  <a target="#" href="a4.webp">
                                    <img className={styles.img4} width="100%" src="/a4.webp" />
                                  </a>
                                </Col>

                                <Col  >
                                  <a target="#" href="a5.webp">
                                    <img className={styles.img4} width="100%" src="/a5.webp" />
                                  </a>
                                </Col>






                              </Row>


                              <a
                                className={styles.a1}
                                href="https://myket.ir/developer/dev-46469"
                                target="#"
                              >
                                <p className={styles.ptext}>دیگر برنامه ها</p>
                              </a>

                            </Col>

                          </Col>

                        </Row>
                      </Col>
                    </Accordion.Body>

                    <Accordion.Body>

                    </Accordion.Body>


                  </Accordion.Item>

                </Accordion>
              </Col>





            </Row>
          </Container>

        </Container>

        <Container fluid id="dev">


          <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.accor}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>درباره من</Accordion.Header>
              <Accordion.Body>
                <img width={50} src="/a.jpg" className={styles.abdolimg} />
              </Accordion.Body>
              <p className={styles.tarah}>
                طراح و برنامه نویس :
                <p className={styles.abdollah}>عبدالله چلاسی</p>
              </p>
              <Accordion.Body>
                من متولد 1373 قشم - روستای گربدان هستم که در زمینه طراحی وب , دسکتاپ و برنامه نویسی موبایل فعالیت دارم و به صورت آزاد یا همون فریلنسینگ کار میکنم, یکی از اتفاقات جالب زندگیم اینه که تفریحم و شغلم یکی هستند و اونم چیزی نیست جز توسعه وب و اپلیکیشن , این داستان از سال 1391 شروع شد که به سمت تکنولوژی و دنیای برنامه نویسی پا گذاشتم همچنان این سابقه با گذر زمان همچنان بیشتر و بیشتر میشه، چون برنامه نویسی چیزی هست که من باهاش دنیا رو می بینم، می سنجم و حس میکنم،و سعی ام بر این است که با همین روند پیش برم و روز به روز با تکنولوژی های جدید دنیای برنامه نویسی کار کنم و تجربیات جدیدی کسب کنم
              </Accordion.Body>


            </Accordion.Item>

          </Accordion>
        </Container>
      </main>

      <footer className={styles.foot} id="call">

        <div >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path opacity={"0"} d="M0,32L80,74.7C160,117,320,203,480,218.7C640,235,800,181,960,186.7C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
            </path>
          </svg>
          <Container fluid>
            <Row>
              <Col sm={9} className={styles.foot1}>
                <h2 className={styles.h2}>تماس با من</h2>
                <Row>
                  <Col md={12}>
                    <Row>
                      <Col>شماره تماس :</Col>
                      <Col> 09335825325</Col>
                    </Row>
                  </Col>

                  <Col md={12}>
                    <Row>
                      <Col>آدرس :</Col>
                      <Col>قشم - روستای گربدان</Col>
                    </Row>
                  </Col>

                  <Col className={styles.cl} md={4}>
                    <a
                      href="https://api.whatsapp.com/send?phone=09335825325"
                      target={"#"}
                    >
                      <img
                        className={styles.imga}
                        src="https://cdn-icons-png.flaticon.com/512/174/174879.png"
                        width={40}
                      />
                    </a>
                  </Col>
                  <Col className={styles.cl} md={4}>
                    <a target={"#"} href="https://telegram.me/abdollah_chelasi">
                      <img
                        className={styles.imga}
                        src="https://cdn-icons-png.flaticon.com/512/906/906377.png"
                        width={40}
                      />
                    </a>
                  </Col>

                  <Col className={styles.cl} md={4}>
                    <a
                      target={"#"}
                      href="https://www.instagram.com/abdollahchelasi/"
                    >
                      <img
                        className={styles.imga}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/640px-Instagram_logo_2016.svg.png"
                        width={40}
                      />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Container fluid className={styles.dev}>
            <Row>
              <Col>
                برنامه نویس و طراح سایت :{" "}
                <a
                  className={styles.aa}
                  href="http://abdollahchelasi.vercel.app"
                  target="#"
                >
                  <span className={styles.abdollah}>عبدالله چلاسی </span>
                </a>{" "}
              </Col>
            </Row>
          </Container>
        </div>




      </footer>
    </>
  );
}
