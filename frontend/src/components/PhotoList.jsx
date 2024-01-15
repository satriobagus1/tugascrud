import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './css/list.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col,Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input} from "reactstrap";


const PhotoList = () => {

  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    // const response = await axios.get("http://localhost:8000/api/photos");
    const data = [{
      id: 1,
      name: "Island",
      image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b"
    }, {
      id: 2,
      name: "Forest",
      image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254"
    }, {
      id: 3,
      name: "Whale",
      image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff"
    }, {
      id: 4,
      name: "Mountain",
      image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0"
    }, {
      id: 5,
      name: "Boat",
      image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0"
    }, {
      id: 6,
      name: "Flowers",
      image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc"
    }, {
      id: 7,
      name: "Fire",
      image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf"
    }, {
      id: 8,
      name: "Garden",
      image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe"
    }, {
      id: 9,
      name: "Bridge",
      image: "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05"
    }];
    setPhotos(data);
  };

  return (
    <div>
        <Row className="p-4">
          <div className="row">
            <div className="col-2">
             <h2>Photo Gallery</h2>
            </div>
            <div className="col-2">
            <Button color="primary" onClick={toggle}>
              Tambah Gambar
            </Button>
            </div>
          </div>

          <Col className="col-12" size="4">
            {photos.map((photo) => (
              <Tile key={photo.id} data={photo} />
              ))}
          </Col>
        </Row>
      {/* <Container className="">
      </Container> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Tambah Gambar</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Judul Foto
          </Label>
          <Input
            id="exampleEmail"
            name="judul_foto"
            placeholder="judul foto"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            deskripsi foto
          </Label>
          <Input
            id="examplePassword"
            name="deskripsi"
            placeholder="deskripsi"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">
            File
          </Label>
          <Input
            id="exampleFile"
            name="file"
            type="file"
          />
        </FormGroup>
        <Button color="primary">
          Submit
        </Button>
  </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const Tile = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const mouseEnterHandler = () => {
    if (!isMouseOver) {
      console.log(data.name);
      setIsMouseOver(true);
    }
  };

  const mouseLeaveHandler = () => {
    if (isMouseOver) {
      setIsMouseOver(false);
    }
  };

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const tileStyle = isOpen
    ? {
        width: '62vw',
        height: '62vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none',
      }
    : {
        width: '18vw',
        height: '18vw',
      };

  return (
      <img className="p-1"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={clickHandler}
        src={data.image} 
        // alt={data.title}
        style={tileStyle}
      />
  );
};

export default PhotoList;
