import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    Card,
    Spinner
} from 'reactstrap';
import { useLazyQuery } from '@apollo/client';
import { GET_TOPICS_BY_NAME } from './graphql/get-related-topics.graphql';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

const Home = () => {
    const [search, setSearch] = useState(null);
    const [getTopic, { loading, error, data }] = useLazyQuery(GET_TOPICS_BY_NAME, {
        fetchPolicy: 'network-only', // Used for first execution
        nextFetchPolicy: 'network-only', // Used for subsequent executions
    });

    const OnClickSearch = (value) => {
        setSearch(value !== '' ? value : null);
    }

    useEffect(() => {
        if (search)
            getTopic({
                variables: {
                    name: search
                }
            });
    }, [search])

    return (
        <Container className="my-5">
            <Row className='justify-content-center'>
                <Col xs={12} sm={9} md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3" align='center'>
                                Github Topic Explorer
                            </CardTitle>
                            <br />
                            <Row className='justify-content-center'>
                                <Col xs={12}>
                                    <SearchBar OnClickSearch={OnClickSearch} searchValue={search} />
                                </Col>
                                <Col xs={12} >
                                    {loading &&
                                        <div className="d-flex justify-content-center">
                                            <Spinner className="my-5" />
                                        </div>
                                    }
                                </Col>
                                <Col xs={12} >
                                    <div className='mt-4'>
                                        {!loading && 
                                            <SearchResults
                                                topic={data}
                                                OnSelectRelTopic={OnClickSearch}
                                                searchValue={search}
                                            />
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;