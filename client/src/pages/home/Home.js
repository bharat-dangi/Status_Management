import React, { useEffect, useState } from "react";
import Share from "../../components/Share/Share";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/post";
import Posts from "../../components/Posts/Posts";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const { user, token } = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(fetchPosts(user?._id, token));
  }, [dispatch, user?._id, token]);
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Share currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
