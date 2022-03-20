import React, { useState, useEffect, useRef } from 'react';
import history from '../history';
import { getCookie } from '../Cookie';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../modules/post';
import PostWrite from '../components/write/PostWrite';

const PostWritePage = () => {
  const dispatch = useDispatch();
  const [selectBox, setSelectBox] = useState(false);
  const [boardType, setBoardType] = useState('');
  const [boardName, setBoardName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgFiles, setImgFiles] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);

  const totalCount = useRef(8);
  const nextId = useRef(1);

  // 로그인 후 닉네임 설정되어 있지 않을 경우 닉네임 설정 페이지로 이동
  const isLogin = !!getCookie('token');
  const nickname = useSelector((state) => state.user.nickname);
  useEffect(() => {
    if (isLogin === true && !!nickname === false) {
      history.push('/mypage/nickname');
      return;
    }
  }, []);

  // select box 클릭 상태 바꾸기
  const clickSelectBox = (e) => {
    setSelectBox(!selectBox);
  };

  // 게시판 선택 시 게시판 타입 저장하는 함수
  const selectBoardType = (e) => {
    switch (e.target.value) {
      case 1:
        setBoardType('free');
        setBoardName('자유');
        setSelectBox(false);
        break;
      case 2:
        setBoardType('sight');
        setBoardName('시야');
        setSelectBox(false);
        break;
      case 3:
        setBoardType('new');
        setBoardName('새내기');
        setSelectBox(false);
        break;
      default:
        return;
    }
  };

  // 제목 작성 시 제목 저장하는 함수
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  // 내용 작성 시 내용 저장하는 함수
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
    if (!boardType || !title || !content) {
      alert('게시판 선택 후 제목과 내용을 작성해주세요.');
      return;
    }
    const files = imgFiles.map((imgFile) => imgFile.imgFile);
    dispatch(addPost(boardType, title, content, files));
    //const { dataUrl } = imgFiles.dataUrl;
    // const revokeFiles = dataUrl.map((url) => URL.revokeObjectURL(dataUrl));
  };

  return (
    <>
      <PostWrite
        selectBox={selectBox}
        clickSelectBox={clickSelectBox}
        selectBoardType={selectBoardType}
        boardType={boardType}
        boardName={boardName}
        imgFiles={imgFiles}
        changeTitle={changeTitle}
        changeContent={changeContent}
        selectFiles={selectFiles}
        deleteFile={deleteFile}
        onSubmit={onSubmit}></PostWrite>
    </>
  );
};

export default PostWritePage;
