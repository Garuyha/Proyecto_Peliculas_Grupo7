import React, { useState, useRef } from 'react';
import styles from "../Modulos/MovieCard.module.css";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';

export function MoviesCards({ movie }) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.cards}>
            <img
                width={230}
                height={345}
                className={styles.movieImage}
                src={imageUrl}
                alt={movie.title}
            />
            <div>{movie.title}</div>

            <div ref={ref}>
                <Button onClick={handleClick}>Show synopsis</Button>

                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <Popover.Body>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Text className={styles.Text}>
                                        {movie.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Popover.Body>
                    </Popover>
                </Overlay>
            </div>
        </li>
    );
}