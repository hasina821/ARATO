import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material"

const CardType = () =>{
     return(
          <>
          <div className="relative flex flex-wrap md:pt-32 pb-32 pt-12 bg-white ml-2">
               <Grid container>
                    <Grid item xs={3}>
                         <Card sx={{ maxWidth: 345,maxHeight:400,minHeight:400 }} style={{borderRadius:'10px 10px'}}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image="https://imgs.search.brave.com/8NABxYoJWpp3G753jsafcBUcPLMj43bzoJxrGrelxts/rs:fit:1040:740:1/g:ce/aHR0cHM6Ly9jb2xs/ZWdlLWRvY3RvcmFs/LnUtYm9yZGVhdXgu/ZnIvdmFyL2V6ZGVt/b19zaXRlL3N0b3Jh/Z2UvaW1hZ2VzL21l/ZGlhL2NvbGxlZ2Ut/ZGVzLWVjb2xlcy1k/b2N0b3JhbGVzLWRl/LWwtdW5pdmVyc2l0/ZS1kZS1ib3JkZWF1/eC9pbWFnZXMvZGl2/ZXJzL2NoYXBlYXUt/ZG9jdG9yYW50LTEw/NDB4NzQwLWMtbW1t/Zy1mb3RvbGlhXzcy/MDU5MDkwX20vMTQx/MzIzLTEtZnJlLUZS/L0NoYXBlYXUtZG9j/dG9yYW50LTEwNDB4/NzQwLUMtbW1tZy1G/b3RvbGlhXzcyMDU5/MDkwX01fR3JhbmRl/LmpwZw"
                              style={{height:'250px'}}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Procédure de recrutement
                              </Typography>
                              
                              </CardContent>
                              <CardActions>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>6</span>Procedure</Button>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>8</span>Pieces à fournir</Button>
                              </CardActions>
                         </Card>
                    </Grid>
                    <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345, maxHeight:400,minHeight:400 }} style={{borderRadius:'10px 10px'}}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image="https://imgs.search.brave.com/QlcOIs8aBbvcdA6w8NX-iqIcd2IImjMVwNkfdCrOKhg/rs:fit:800:673:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb250/cmF0LWRlLXNpZ25h/dHVyZS1wb3VyLWRl/cy1hZmZhaXJlcy05/NDM5NzkxMS5qcGc"
                              style={{height:'250px'}}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                   Renouvellement de contrat de travail
                              </Typography>
                              
                              </CardContent>
                              <CardActions>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>5</span>Procedure</Button>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>7</span>Pieces à fournir</Button>
                              </CardActions>
                         </Card>
                    </Grid>
                    <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345,maxHeight:400,minHeight:400 }} style={{borderRadius:'10px 10px'}}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image="https://imgs.search.brave.com/3pU4YMyFXAkTdZ4Tb4N9VhGPmScTLP_jjL4ztNzqUWY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL3ZlY3Rl/dXItbGlicmUvcDIv/MjA5OTM3Ny1yZXVu/aW9uLWRlcy1wYXJ0/ZW5haXJlcy1jb21t/ZXJjaWF1eC1zaWdu/YXR1cmUtZHUtY29u/dHJhdC1pbGx1c3Ry/YXRpb25sZS1wbGF0/ZS1kZS1wZXJzb25u/YWdlcy12ZWN0b3Jp/ZWwuanBn"
                              style={{height:'250px'}}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                   Intégration d'agent non encadrées de l'Etat
                              </Typography>
                              
                              </CardContent>
                              <CardActions>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>8</span>Procedure</Button>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>10</span>Pieces à fournir</Button>
                              </CardActions>
                         </Card>
                    </Grid>
                    <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345,maxHeight:400,minHeight:400 }} style={{borderRadius:'10px 10px'}}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image="https://imgs.search.brave.com/AIDGqjV4rhkMk74Q0TTu4c_f2hf-qKvMwG963BehBmI/rs:fit:1200:955:1/g:ce/aHR0cHM6Ly93d3cu/dm91c25vdXNpbHMu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDUvR2V0dHlJ/bWFnZXMtMTMxMTgw/MjgyOC5qcGc"
                              style={{height:'250px'}}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Procédure Equivalence administrative des diplômes
                              </Typography>
                              
                              </CardContent>
                              <CardActions>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>4</span>Procedure</Button>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>12</span>Pieces à fournir</Button>
                              </CardActions>
                         </Card>
                    </Grid>
               </Grid>
               <Grid container style={{marginTop:'2%'}}>
                    <Grid item xs={3}>
                         <Card sx={{ maxWidth: 345,maxHeight:400,minHeight:400}} style={{borderRadius:'10px 10px'}}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image="https://imgs.search.brave.com/p2Hf8E9_ua3UQpyGjrBRNx0fyTjmaULrg23LzCigPX4/rs:fit:736:736:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC82Yi85OS8yNi82/Yjk5MjY3OGY2YjJk/MzY1OTRjOWNlMTIz/Y2NjZTY0ZS0tZnJl/ZS1pbWFnZS1hdWN0/aW9uLmpwZw"
                              style={{height:'250px'}}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Procedure de traduction devant le codis
                              </Typography>
                              
                              </CardContent>
                              <CardActions>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>6</span>Procedure</Button>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>8</span>Pieces à fournir</Button>
                              </CardActions>
                         </Card>
                    </Grid>
                    <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345,maxHeight:400,minHeight:400 }} style={{borderRadius:'10px 10px'}}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image="https://imgs.search.brave.com/hef9a_ya35ivn6R0b8RfrNoqsouaxO1nq2LR6zvtpOs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bWV0c29jLm9yZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNS8w/Mi9IaVJlcy5qcGc"
                              style={{height:'250px'}}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Procédure de nomination
                              </Typography>
                              
                              </CardContent>
                              <CardActions>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>5</span>Procedure</Button>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>7</span>Pieces à fournir</Button>
                              </CardActions>
                         </Card>
                    </Grid>
                    <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345,maxHeight:400,minHeight:400 }} style={{borderRadius:'10px 10px'}}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image="https://imgs.search.brave.com/MIJYKsF8k1R-A-yC90-V99HKpO6TnaYc8ID28uaC1lU/rs:fit:175:175:1/g:ce/aHR0cDovL21lZGlh/LmNvbXByZW5kcmVj/aG9pc2lyLmNvbS9w/dWJsaWMvaW1hZ2Uv/cmVjbGFzc2VtZW50/LWxpY2VuY2llbWVu/dC1wcmV2aWV3LTg3/MjY2NzEuanBn"
                              style={{height:'250px'}}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                   Procédure de reclassment indiciaire
                              </Typography>
                              
                              </CardContent>
                              <CardActions>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>8</span>Procedure</Button>
                              <Button size="small"><span style={{color:'black',fontWeight:'bold'}}>10</span>Pieces à fournir</Button>
                              </CardActions>
                         </Card>
                    </Grid>
               </Grid>
          </div>
     </>
     )

}

export default CardType;