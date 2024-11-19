import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function TableList() {
   function createData(name, date) {
      return { name, date }
   }
   const rows = [
      createData('겨울 스페셜 입장권 예약 오픈 및 눈썰매장 오픈 예정', '2024 / 12 / 01'),
      createData('핼러윈 페스티벌 코스튬 콘테스트 안내', '2024 / 10 / 28'),
      createData("새로운 공포 테마 어트랙션 '헬로우 윌리지' 개장", '2024 / 10 / 27'),
      createData('가을 시즌 오픈 준비로 인한 임시 휴장 안내', '2024 / 09 / 09'),
      ,
      createData('불꽃놀이 & 레이저 쇼 일정 공지', '2024 / 07 / 25'),
      ,
      createData('여름 방학 한정! 어린이 무료 입장 프로모션', '2024 / 07 / 18'),
      ,
      createData('워터 페스티벌 사전 예약 할인 이벤트', '2024 / 07 / 17'),
      ,
      createData('새로워진 워터 슬라이드 어트랙션 오픈 소식', '2024 / 07 / 05'),
      ,
      createData('여름 시즌 맞이 특별 야간 개장 안내', '2024 / 07 / 01'),
   ]
   return (
      <div>
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TableContainer sx={{ width: '1200px', margin: '50px 0' }}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell sx={{ fontSize: '25px', fontWeight: 'bolder' }}>공지내용</TableCell>
                        <TableCell align="right" sx={{ fontSize: '25px', fontWeight: 'bolder' }}>
                           작성일
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, ':hover': { backgroundColor: 'rgba(226, 226, 226, 0.527)' } }}>
                           <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                 ':hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                 },
                              }}
                           >
                              {row.name}
                           </TableCell>
                           <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      </div>
   )
}

export default TableList
