import React from 'react'

export default function SvgHolder({ Icon, color }) {
  return (
    <Icon fill={color} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  )
}
