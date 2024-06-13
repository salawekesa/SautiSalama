import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features3 = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               {/* <Text span css={{color: '$blue600'}}>
                  Awesome Feature
               </Text> */}
               <Text h3></Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
               <Text span css={{color: '$blue600'}}>
                  Awesome Feature
               </Text>
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>🛡️ Full Confidentiality</Text>
                           <Text span>
                           Choose to keep your details private, even while seeking support services.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>📋Optional Identification</Text>
                           <Text span>
                           If you’re comfortable, you can provide your details to access legal aid and personalized guidance.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>🔒 Automatic Anonymous Mode:</Text>
                           <Text span>
                           Report abuse and access resources discreetly.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{ mw: '500px' }}>
                  <p>This is a child element inside the Card component.</p>
               </Card>
               {/* <Card css={{ mw: '500px' }} children={undefined}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card> */}
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
