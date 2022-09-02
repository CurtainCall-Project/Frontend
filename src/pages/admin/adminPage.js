import React from 'react';
import BoardList from '../../components/board/BoardList';
import Paging from '../../components/board/Paging';

function AdminPage() {
  return (
    <div>
      AdminPage
      <BoardList posts={[]} boardType={''} />
      {/* <Paging
      // page={page}
      // totalItemsCount={totalItemsCount}
      // changePage={changePage}
      /> */}
    </div>
  );
}

export default AdminPage;
