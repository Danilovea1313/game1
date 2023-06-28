class game {
private mn: number=0;
private mx: number=0;
private rnd: number=0;
get MinNumber(): number{
  return this.mn;
}
set MinNumber(value: number){
  this.mn=value;
}
get MaxNumber(): number{
  return this.mx;
}
set MaxNumber(value: number){
  this.mx=value;
}
get RandNumber(): number{
  return this.rnd;
}
set RandNumber(value: number){
  this.rnd=value;
}
 private rand()
 {
  return (Math.floor(Math.random()*(this.mx-this.mn))+this.mn);
 }
 sr(chis: number)
 {
  this.rnd=this.rand();
  if(chis <=this.mx && chis >= this.mn)
  {
    if (chis == this.rnd) 
    {
      alert( 'Угадали! Число заданное: '+this.rnd );
    }
    else if (chis > this.rnd) 
    {
      alert('Число больше введенного!');
    }
    else if (chis < this.rnd) 
    {
      alert('Число меньше введенного!');
    }
    if(chis===null || String(chis) === "")
    {
    }
}
else
{
alert('Неверно введенное число, проверьте диапазон: от '+ this.mn+' до '+ this.mx);
}
}
}
let gm=new game();
gm.MinNumber=Math.ceil(Number(prompt('Min')));
gm.MaxNumber=Math.floor(Number(prompt('Max')));
let g:number;
do
{
  g=Number(prompt('Chis'));
  gm.sr(g);
}
while(gm.RandNumber!=g);