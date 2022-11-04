import Head from 'next/head'
//import Link from 'next/link'
import Navbar3 from './components/Navbar3'
import * as React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import courses from './api/data/data.js'

const Courses = () => {

  
  
  return (
    <>
  <Navbar3/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Connecteen | Courses</title>
        
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          We offer advanced courses in {' '}
        </h1>

        <motion.div
                initial={{opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}>
        <div className="flex flex-wrap items-center justify-around mt-8 max-w-8xl sm:w-full">
        

      
    {/* 👇️ iterate object VALUES */}
    {Object.values(courses).map((value, index) => {
      return (
        <section className="p-6 mt-6 text-left border Course w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 cardCourse" key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image="" alt="<image>"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {value.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {value.title}
              </Typography>
            </CardContent>
            <CardActions>
              <a href={value.link}><Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>
        </section>
      )
    })}
    
    </div>
    </motion.div>
      </main>

    </div>
    </>
  )
}
              

        
export default (Courses);


/*

      <Card sx={{ maxWidth: 400 }} className="card">
      <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish"/>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={value.name}  // title here
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {value.title}  
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {value.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

<a href="https://nextjs.org/docs"className="p-6 mt-6 text-left border card w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">

with image import

            <a href="https://nextjs.org/docs"className="p-6 mt-6 text-left border card w-96 rounded-xl hover:text-blue-600 focus:text-blue-600" key={index}>
              <p className="text-2xl font-bold">{value.name}</p>
              <p className="mt-4 text-sm">{value.description}</p>
              <div className="flex justify-between mt-6">
                <p className="text-blue-600">Learn more</p>
                <img src={value.image} alt="logo" className="w-6 h-6" />
              </div>
            </a>
*/