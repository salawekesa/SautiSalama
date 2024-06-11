import {Button, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';
import Image from 'next/image'; // Import Image component from Next.js

export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{textAlign: 'center'}}>
               Trusted for Innovation and Impact by
            </Text>
           
            <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  },
               }}
            >
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                  <div>
                     <Image
                        src="/assets/images/Hiil.png"
                        alt="Sauti Salama"
                        width={140}
                        height={100}
                        className='object-contain'
                     />
                  </div>
                  {/* <Text weight={'semibold'} span size={'$lg'}>
                     Company 1
                  </Text> */}
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                  <div>
                     <Image
                        src="/assets/images/wangu.png"
                        alt="Sauti Salama"
                        width={140}
                        height={100}
                        className='object-contain'
                     />
                  </div>
                  {/* <Text weight={'semibold'} span size={'$lg'}>
                     Company 1
                  </Text> */}
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                  <div>
                     <Image
                        src="/assets/images/jica.png"
                        alt="Sauti Salama"
                        width={140}
                        height={100}
                        className='object-contain'
                     />
                  </div>
                  {/* <Text weight={'semibold'} span size={'$lg'}>
                     Company 1
                  </Text> */}
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                  <div>
                     <Image
                        src="/assets/images/unicef.png"
                        alt="Sauti Salama"
                        width={140}
                        height={100}
                        className='object-contain'
                     />
                  </div>
                  {/* <Text weight={'semibold'} span size={'$lg'}>
                     Company 1
                  </Text> */}
                  </Flex>
               </Grid>
               
               {/* < */}
               {/* <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 4
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 5
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 6
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 7
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 8
                     </Text>
                  </Flex>
               </Grid> */}
            </Grid.Container>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
              Sauti Salama has been honored by leading organizations for its innovative approach and impactful solution. 
              These accolades highlight our dedication to empowering survivors of gender-based 
              violence and creating safer communities.
            </Text>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
