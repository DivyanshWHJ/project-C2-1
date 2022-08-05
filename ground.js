class Ground
{   constructor(x,y,w,h)
    {
        let options = {
            isStatic:true
        };
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w=w
        this.h=h
        World.add(World,this.body);
    }
    Show() {
        var pos=this.body.position;
        Push()
        rectMode(CENTRE)
        stroke(255)
        Fill(127)
        rect(pos.x,pos.y,this.w,this.h);
        Pop()}
}



