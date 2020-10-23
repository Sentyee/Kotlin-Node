package com.example.software

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.software.models.Software
import java.util.ArrayList
import com.squareup.picasso.Picasso


class SoftwareAdapter(var softwareList: ArrayList<Software>, val context: Context) : RecyclerView.Adapter<SoftwareAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val v = LayoutInflater.from(parent.context).inflate(R.layout.software_list_row, parent, false)
        return ViewHolder(v)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bindView(softwareList[position], context)
    }

    override fun getItemCount(): Int {
        return softwareList.size
    }

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        fun bindView(s: Software, context: Context){
            val url = "http://192.168.1.48:8080/img/software-"
            val txt_name: TextView = itemView.findViewById(R.id.textViewName)
            val txt_version: TextView = itemView.findViewById(R.id.textViewVersion)
            val txt_release: TextView = itemView.findViewById(R.id.textViewRelease)
            val img: ImageView = itemView.findViewById(R.id.imageViewSoftware)

            txt_name.text = s.name
            txt_version.text = s.version
            txt_release.text = s.release

            val imageURL = url + s.id.toString() + ".jpg"
            Picasso.with(context).load(imageURL).into(img)
        }
    }
}