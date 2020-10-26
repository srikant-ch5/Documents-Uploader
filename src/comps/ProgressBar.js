import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(`${url} is the url `)
  useEffect(() => {
    //here we are supposed to use url to set it to null
    //but since url is not returned by firebase currently using progress to disappear the progress bar
    if (progress===100) {
      setFile(null);
    }
  }, [url, progress, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;