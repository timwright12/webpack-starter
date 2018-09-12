import Example from '../assets/components/example-component/example-component';

test( 'Check Example Component', () => {

  expect( Example.init( '#example' ) ).toBe( true );

} );