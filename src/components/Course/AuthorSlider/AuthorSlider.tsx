import { observer } from 'mobx-react';
import { Paper, Typography, Box, Avatar } from '@material-ui/core';
import Slider from 'react-slick';

import { useStyles } from './styles';
import SliderArrow from './SliderArrow';
import { ISubjectAuthor } from '../../../base/types/SubjectTypes';

const AuthorSlider: React.FC<any> = observer(({ data }) => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box mx={-2} className={classes.sliderWrap}>
      <Slider {...settings}>
        {data.map((author: ISubjectAuthor, index: number) => (
          <Box key={index} width="100%" display="flex !important" justifyContent="center" px={2}>
            <Box width="100%" maxWidth={{ xxs: 320, md: 'none' }}>
              <Paper elevation={0} variant="outlined">
                <Box pt={8.25} pb={4.75} px={2}>
                  <Box display="flex" flexDirection="column" alignItems="center" mb={4.625}>
                    <Avatar src={author.img} className={classes.avatar} />
                  </Box>

                  <Typography variant="h6" align="center">
                    {author.name}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
});

export default AuthorSlider;
