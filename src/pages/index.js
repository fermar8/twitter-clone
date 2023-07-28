import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/hooks/useAppProvider';
import { FormContainer, Label, Input } from '@/styles/components/form';
import Button from '@/styles/components/buttons/Button';


const MyForm = () => {
  const [username, setUsername] = useState('');
  const [tag, setTag] = useState('');

  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, tag });
    router.replace('/feed');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1 style={{ width: '372px', fontSize: '24px', textAlign: 'center', marginBottom: '4rem' }}>Welcome to Twitter</h1>
      <Label>
        Username:
      </Label>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Label>
        Tag:
      </Label>
      <Input
        type="text"
        placeholder="@tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default MyForm;
