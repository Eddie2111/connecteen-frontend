import { useRouter } from 'next/router'

const ID = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default ID;
