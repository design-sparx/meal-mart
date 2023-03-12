import {
  Alert,
  Button,
  Container,
  createStyles,
  FileInput,
  Group,
  List,
  NativeSelect,
  Paper,
  Radio,
  Select,
  SimpleGrid,
  Stack,
  Stepper,
  Text,
  TextInput,
  ThemeIcon,
  Title
} from '@mantine/core';
import React, {useState} from 'react';
import {MdCheckCircle, MdHelpOutline, MdOutlineUploadFile} from 'react-icons/md';
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  form: {
    // background: theme.colors.gray[0],
    boxShadow: theme.shadows.sm
  }
}))

const data = [
  {value: 'ke', label: 'KE'},
  {value: 'ug', label: 'UG'},
  {value: 'tz', label: 'TZ'},
  {value: 'rw', label: 'RW'},
];

export default function RiderForm() {
  const {classes} = useStyles();
  const [active, setActive] = useState(0);
  const smallScreen = useMediaQuery('(max-width: 426px)');
  const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container>
      <Stack>
        <Title size={smallScreen ? 28 : 48} align="center" mb="xl">Apply Now</Title>
        <Paper p="lg" className={classes.form}>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
            <Stepper.Step label="Telephone">
              <Stack>
                <Alert icon={<MdHelpOutline size={16}/>} variant="filled">
                  A verification code will be sent to your mobile. Note carrier charges may apply.
                </Alert>
                <TextInput
                  type="tel"
                  placeholder="+254"
                  label="Telephone"
                  rightSection={<NativeSelect
                    data={data}
                    styles={{
                      input: {
                        fontWeight: 500,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      },
                    }}
                  />}
                  rightSectionWidth={92}
                />
                <TextInput type="text" label="Code" placeholder="enter verification code sent to your mobile."/>
              </Stack>
            </Stepper.Step>
            <Stepper.Step label="Personal information">
              <Stack>
                <Alert icon={<MdHelpOutline size={16}/>} variant="filled">
                  <Text size="md">To register you must:</Text>
                  <List size="sm" sx={{color: 'white'}}>
                    <List.Item>Be at least 18 years old</List.Item>
                    <List.Item>Have a motorbike or bicycle Have a smartphone.</List.Item>
                    <List.Item>Have a smartphone.</List.Item>
                  </List>
                  <Text>Use your full legal names as they appear in your documents.</Text>
                </Alert>
                <SimpleGrid cols={2} spacing="lg" breakpoints={[
                  {maxWidth: 'md', cols: 2, spacing: 'md'},
                  {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                  {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                ]}>
                  <TextInput label="First name" placeholder="first name" withAsterisk/>
                  <TextInput label="Last name" placeholder="last name" withAsterisk/>
                </SimpleGrid>
                <TextInput type="email" label="Email" placeholder="email"/>
                <TextInput type="number" label="Age" placeholder="age"/>
                <Radio.Group
                  name="gender"
                  label="Gender"
                  withAsterisk
                >
                  <Radio value="male" label="Male"/>
                  <Radio value="female" label="Female"/>
                  <Radio value="non-binary" label="Non binary"/>
                </Radio.Group>
                <Select label="City" placeholder="city" withAsterisk data={[{value: '', label: '---'},]}/>
                <Radio.Group
                  name="vehicle-type"
                  label="What's your vehicle type?"
                  orientation="vertical"
                  withAsterisk
                >
                  <Radio value="bicycle" label="Bicycle"/>
                  <Radio value="motorbike" label="Motorbike"/>
                </Radio.Group>
              </Stack>
            </Stepper.Step>
            <Stepper.Step label="Submit your Documents">
              <Stack>
                <Alert icon={<MdHelpOutline size={16}/>} variant="filled">
                  <Text>When uploading documents, make sure:</Text>
                  <List size="sm" sx={{color: 'white'}}>
                    <List.Item>the document image is clear</List.Item>
                    <List.Item>all text is readable</List.Item>
                    <List.Item>full document is visible in photo</List.Item>
                  </List>
                </Alert>
                <FileInput
                  placeholder="upload logbook"
                  label="Logbook"
                  icon={<MdOutlineUploadFile size={14}/>}
                  withAsterisk/>
                <FileInput
                  placeholder="upload driver's license"
                  label="Driver's license"
                  icon={<MdOutlineUploadFile size={14}/>}
                  withAsterisk/>
                <FileInput
                  placeholder="upload national id"
                  label="National ID"
                  icon={<MdOutlineUploadFile size={14}/>}
                  withAsterisk/>
                <FileInput
                  placeholder="upload police clearance certificate"
                  label="Police clearance certificate"
                  icon={<MdOutlineUploadFile size={14}/>}
                  withAsterisk/>
                <FileInput
                  placeholder="upload comprehensive insurance"
                  label="Insurance"
                  icon={<MdOutlineUploadFile size={14}/>}
                  withAsterisk/>
              </Stack>
            </Stepper.Step>
            <Stepper.Completed>
              <Paper sx={{textAlign: 'center'}}>
                <Stack align="center">
                  <ThemeIcon variant="light" size={48}><MdCheckCircle size={32}/></ThemeIcon>
                  <Text>Your documents have been uploaded. Keep checking the app to ensure all your documents are
                    approved. Re-upload any rejected documents.</Text>
                </Stack>
              </Paper>
            </Stepper.Completed>
          </Stepper>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            {active <= 4 ? <Button onClick={nextStep}>Next step</Button> : <Button onClick={nextStep}>Submit</Button>}
          </Group>
        </Paper>
      </Stack>
    </Container>
  );
}

