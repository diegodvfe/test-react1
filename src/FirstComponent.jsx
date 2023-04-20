import PropTypes  from 'prop-types'

// const GetSaludos = {
//     message: 'Hola'
// };

// const GetName = 'Vanessa!!';

// const getResults = (a, c) => {
//     return a + c;
// };

export const FirstComponent = ({title, subTitle, name}) => {

        
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};


FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstComponent.defaultProps = {
    // title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Diego Lopez'
}