import {
  Badge,
  Button,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'

function ManualClose({ name, image, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        border={'none'}
        background={'transparent'}
        mr={3}
        onClick={onOpen}
      >
        Check
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Heading
            padding={10}
            fontSize={30}
            fontFamily={'M+PLUS+Rounded+1'}
            children={name}
          />
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image src={image} />
          </ModalBody>

          <ModalFooter>
            <Badge></Badge>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ManualClose
