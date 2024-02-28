import axios from "axios";
import { Popular_Movie, options } from '../utils/constant';
import { getPopularMovie } from '../redux/movieSlice';
import {useDispatch} from "react-redux";


const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovie(res.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovies