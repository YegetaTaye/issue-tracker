import ErrorMessage from '@/app/components/ErrorMessage'
import { Callout, TextField, Button, Spinner, Box } from '@radix-ui/themes'
import { Controller } from 'react-hook-form'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height={'20rem'}/>
      <Skeleton width={'5rem'}/>

    </Box>
  )
}

export default loading
