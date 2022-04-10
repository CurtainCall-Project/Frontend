import React, { useState, useEffect, useRef } from 'react';
import history from '../../history';
import { getCookie } from '../../Cookie';
import { useDispatch, useSelector } from 'react-redux';
import RentWrite from '../../components/write/RentWrite';
import { addRentPost } from '../../modules/post';

const RentWritePage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState(0);
  const [period, setPeriod] = useState('');
  const [place, setPlace] = useState('');
  const [delivery, setDelivery] = useState(false);
  const [content, setContent] = useState('');
  const [imgFiles, setImgFiles] = useState([]);

  // 첨부 가능한 사진의 개수 설정
  const totalCount = useRef(8);
  // 사진 id 1로 설정
  const nextId = useRef(1);

  // 제목 작성 시 제목 저장하는 함수
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeItem = (e) => {
    setItem(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changePeriod = (e) => {
    setPeriod(e.target.value);
  };

  const changePlace = (e) => {
    setPlace(e.target.value);
  };

  const clickDelivery = (e) => {
    setDelivery(!delivery);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  // 이미지 파일 선택 시 이미지를 저장하고, 미리보기를 보여주는 함수
  const selectFiles = (e) => {
    // 선택한 파일 없을 때는 아무것도 실행하지 않는다
    if (!e.target.files.length) {
      return;
    }

    const newFiles = Array.from(e.target.files);
    // 첨부 파일 용량을 10MB로 제한한다.
    if (newFiles.filter((file) => file.size > 10 * 1024 * 1024).length > 0) {
      window.alert('파일 1개의 크기를 10MB 이하로 제한합니다.');
      return;
    }
    // 업로드 가능한 파일을 8개로 제한한다.
    if (imgFiles.length + newFiles.length > totalCount.current) {
      window.alert(
        '파일은 최대 ' + totalCount.current + '개까지 업로드할 수 있습니다.'
      );
      return;
    }

    //파일을 미리보기 위해 URL 객체를 생성한다
    const files = newFiles.map((file) => {
      const newfile = {
        id: nextId.current,
        imgFile: file,
        dataUrl: URL.createObjectURL(file),
      };
      nextId.current++;
      return newfile;
    });
    setImgFiles(imgFiles.concat(files));
  };

  // 삭제 버튼 클릭시 미리보기 이미지를 삭제한다
  const deleteFile = (id) => {
    setImgFiles(imgFiles.filter((imgFile) => imgFile.id !== id));
  };

  const onSubmit = () => {
    if (!title || !item || !price || !period || !place) {
      alert('필수 작성 항목은 제목, 기종, 가격, 대여기간, 거래장소입니다.');
      return;
    }
    const files = imgFiles.map((imgFile) => imgFile.imgFile);
    dispatch(
      addRentPost(title, item, price, period, place, delivery, content, files)
    );
    //const { dataUrl } = imgFiles.dataUrl;
    // const revokeFiles = dataUrl.map((url) => URL.revokeObjectURL(dataUrl));
  };
  return (
    <>
      <RentWrite
        changeTitle={changeTitle}
        changeItem={changeItem}
        changePrice={changePrice}
        changePeriod={changePeriod}
        changePlace={changePlace}
        delivery={delivery}
        clickDelivery={clickDelivery}
        changeContent={changeContent}
        imgFiles={imgFiles}
        selectFiles={selectFiles}
        deleteFile={deleteFile}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default RentWritePage;
