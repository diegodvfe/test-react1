import { render, screen } from '@testing-library/react';
import { FirstComponent } from '../FirstComponent';

describe('Este es una prueba de factorizacion de la aplicacion', () => {
    const title = 'Hola, soy Diego';
    const subTitle = 'Soy un subtitulo';
    const name = ' Me llamo React';
    // console.log(title)

    test('Este debe de regresar un snapshot del componente', () => {
        const { container } = render(<FirstComponent title={title} />);

        expect(container).toMatchSnapshot();
    });

    test('Este debe de evaluar el titulo Hola soy Diego', () => {
        render(<FirstComponent title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe de evaluar el titulo en un h1', () => {
        render(<FirstComponent title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstComponent title={title} subTitle={subTitle} />);

        expect(screen.getAllByText(subTitle).length).toBe(2);
    });

    test('debe de evaluar el prop de name en la aplicacion', () => {
        render(<FirstComponent name={name} />);

        expect(screen.getAllByText(name).length).toBe(1);
    });
});
