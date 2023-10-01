import { Box, Container, Grid, Label, Input, Select, Badge } from 'theme-ui'
import Icon from '@hackclub/icons'
import { useRouter } from 'next/router'

export default function SearchControls({
  query,
  setQuery,
  filter,
  setFilter,
  language,
  setLanguage,
  timelength,
  setTimelength,
  selected,
  setSelected
}) {
  const router = useRouter()

  return (
    <Container
      as="form"
      p={0}
      sx={{ borderRadius: '32px', backgroundColor: 'muted' }}>
      <Grid columns={[null, '3fr 1.5fr 1.5fr 1.5fr']}>
        <Box gridcolumn={[null, 'span 3']}>
          <Label>Search Jams</Label>
          <Box
            sx={{
              display: 'flex',
              paddingLeft: 2,
              borderRadius: 4,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              border: '1px solid',
              borderColor: 'muted',
              borderRadius: 6,
            }}>
            <Icon color="muted" glyph="search" size={24} />
            <Input
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search for Raspberry Jam"
            />
          </Box>
        </Box>
        <Box gridcolumn={[null, 'span 1']}>
          <Label>Difficulty</Label>
          <Select
            sx={{ border: '1px solid', borderColor: 'muted', borderRadius: 6 }}
            value={filter}
            onChange={event => setFilter(event.target.value)}>
            <option value="" selected>
              All Levels
            </option>
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Difficult">Difficult</option>
          </Select>
        </Box>
        <Box gridcolumn={[null, 'span 1']}>
          <Label>Coding Language</Label>
          <Select
            sx={{
              border: '1px solid',
              borderColor: 'muted',
              borderRadius: 6
            }}
            value={language}
            onChange={event => setLanguage(event.target.value)}>
            <option value="" selected>
              All Languages
            </option>
            {router.locales.map(locale => (
              <option value={locale}>JavaScript</option>
            ))}
          </Select>
        </Box>
        <Box gridcolumn={[null, 'span 1']}>
          <Label>Time Length</Label>
          <Select
            sx={{
              border: '1px solid',
              borderColor: 'muted',
              borderRadius: 6
            }}
            value={timelength}
            onChange={event => setTimelength(event.target.value)}>
            <option value="" selected>
              All Lengths
            </option>
            <option value="Short">30min</option>
            <option value="Regular">45min</option>
            <option value="Long">1hr</option>
          </Select>
        </Box>
      </Grid>
      {/* <Badge
        key="Greatest Hits"
        mr={2}
        sx={{ cursor: 'pointer' }}
        mt={3}
        variant="outline"
        color="muted">
        Greatest Hits
      </Badge>
      <Badge
        key="Great for Friends"
        mr={2}
        sx={{ cursor: 'pointer' }}
        mt={3}
        variant="outline"
        color="muted">
        Great for Friends
      </Badge>
      <Badge
        key="Great for Clubs"
        mr={2}
        sx={{ cursor: 'pointer' }}
        mt={3}
        variant="outline"
        color="muted">
        Great for Clubs
      </Badge>
      <Badge
        key="Underrated"
        mr={2}
        sx={{ cursor: 'pointer' }}
        mt={3}
        variant="pill"
        backgroundColor="purple"
        color="white">
        Underrated
      </Badge> */}
    </Container>
  )
}
