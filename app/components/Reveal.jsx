'use client'
import React from 'react'
import { motion } from 'motion/react'

// Apple's scroll reveals are restrained: a short rise, a soft ease,
// and they only play once. This wrapper keeps that consistent site-wide.
const Reveal = ({
  children,
  as = 'div',
  delay = 0,
  y = 30,
  duration = 0.8,
  className = '',
  amount = 0.25,
  ...rest
}) => {
  const Component = motion[as] || motion.div

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Reveal
