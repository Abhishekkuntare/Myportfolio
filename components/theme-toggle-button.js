import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import useSound from 'use-sound'
const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  const [isChecked, setIsChecked] = useState(false)
  const [playOn] = useSound('/sounds/s4.wav', { volume: 0.25 })
  const [playOff] = useSound('/sounds/s5.wav', { volume: 0.25 })

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          name="demo-checkbox"
          checked={isChecked}
          label="I agree to self-isolate"
          onChange={() => setIsChecked(!isChecked)}
          // onMouseDown={playActive}
          onMouseUp={() => {
            isChecked ? playOff() : playOn()
          }}
          aria-label="Toggle theme"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
