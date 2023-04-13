import React from 'react'
import {useParams} from 'react-router-dom'

function MemoDetailPage() {

    const {id} = useParams()

  return (
    <div>
        메모상세 페이지 {id}
    </div>
  )
}

export default MemoDetailPage
