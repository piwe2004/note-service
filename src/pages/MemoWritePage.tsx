import React from 'react'
import {useParams} from 'react-router-dom'

function MemoWritePage() {

    const {id} = useParams()

  return (
    <>
        메모 쓰기
    </>
  )
}

export default MemoWritePage
