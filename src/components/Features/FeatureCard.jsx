function FeatureCard({icon,title,description}){

return(

<div className="
bg-white/5 
border 
border-cyan-400/30
rounded-2xl
p-6
hover:border-cyan-400
hover:-translate-y-2
transition
">


<div className="text-4xl mb-5">
{icon}
</div>


<h3 className="text-xl font-semibold mb-3 text-cyan-300">
{title}
</h3>


<p className="text-gray-400">
{description}
</p>


</div>

)

}

export default FeatureCard;