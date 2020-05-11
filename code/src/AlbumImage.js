import React from 'react'
import './albumimage.css'
import { Heart, Play, Dots } from 'Icons'

export const AlbumImage = (props) => {
  const { images } = props

  return (
    <div className="album-image">
      <img src={images[0].url} alt="Album Cover" />
      <div className="icons-container">
        <Heart />
        <Play />
        <Dots />
      </div >
    </div >
  )
}