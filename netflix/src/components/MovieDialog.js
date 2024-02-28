import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useSelector,useDispatch} from "react-redux";
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() { 
  const {open,id} = useSelector(store=>store.movie);
  const dispatch = useDispatch();

  const handleClose = () =>{
    dispatch(setOpen(false));
  }
 
  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" 
      >
       <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VideoBackground movieId={id} bool = {true}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}