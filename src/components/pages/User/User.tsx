import React, { useState } from "react";
import { CardActionArea, Container, makeStyles } from '@mui/material';
import './User.css'
import SearchAppBar from '../../SearchBar/SearchBar';
import { useEffect } from "react";
import UserCard from "../../UserCard/UserCard";
import BasicCard from "../../BasicCard/BasicCard";
import { Grid } from "@mui/material";


export default function ActionAreaCard() {

    const [avatarURL, setAvatarURL] = useState();
    const [githubUsername, setGitHubUsername] = useState();
    const [repoData, setRepoData] = useState<any[]>([])
    const [filteredData, setFilteredData] = useState<any[]>([])
    const [wordEntered, setWordEntered] = useState("");

    //Filtering repositories by search bar
    const handleFilter = (event: { target: { value: string; }; }) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = repoData.filter((repo) => {
            return repo.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        //to set default case to all repositories
        if (searchWord === "") {
            setFilteredData(repoData);
            //initialize filtered repositories
        } else {
            setFilteredData(newFilter);
        }
    };

    useEffect(() => {
        setFilteredData(repoData)
    }, [])
    console.log('filteredData',filteredData)

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    //initializing user profile features
    useEffect(() => {
        fetch("https://api.github.com/users/saracovsky")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    fetch(result.repos_url)
                        .then((res) => res.json())
                        .then(repoRes => setRepoData(repoRes))
                    setAvatarURL(result.avatar_url);
                    setGitHubUsername(result.login);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    return (
        <div className="User">

            <form >
                <SearchAppBar searchedItem={handleFilter} value={wordEntered} />
            </form>

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div className="UserInfo">
                            <UserCard img={avatarURL} name={githubUsername} />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>
                            {filteredData.length > 0 ? (<div className="repoInfo">
                                {
                                    filteredData.map((item) => {
                                        return (<div> <BasicCard repoName={item?.name} repoDesc={item?.description} repoLang={item?.language} /> </div>)
                                    })
                                }
                            </div>) : null}
                        </div>
                    </Grid>
                </Grid>
            </Container>


        </div>

    );
}

